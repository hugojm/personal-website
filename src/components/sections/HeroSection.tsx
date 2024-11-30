import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import styles from '@/styles/sections/HeroSection.module.css';

interface LLMArchitectureProps {
  onComplete?: () => void;
  onTokenGenerated?: (token: string) => void;
  onNodeActivated?: (nodeId: string) => void;
}

const LLMArchitecture = ({ onComplete, onTokenGenerated, onNodeActivated }: LLMArchitectureProps) => {
  const [activeNodes, setActiveNodes] = useState<string[]>([]);
  const [activeWeights, setActiveWeights] = useState<string[]>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const layers = [4, 6, 8, 6, 4];
  const tokens = [
    'Hugo',
    'is',
    'a',
    'machine',
    'learning',
    'engineer',
    'who',
    'specializes',
    'in',
    'transforming',
    'businesses',
    'through',
    'AI',
    'solutions',
  ];

  const [graph, setGraph] = useState<{ nodes: { [key: string]: { id: string; layer: number; index: number; incoming: any[]; outgoing: any[]; activated: boolean } }; edges: { id: string; start: { id: string; layer: number; index: number; incoming: any[]; outgoing: any[]; activated: boolean }; end: { id: string; layer: number; index: number; incoming: any[]; outgoing: any[]; activated: boolean }; activated: boolean }[] }>({ nodes: {}, edges: [] });
  const animationCompleted = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const generateGraph = () => {
    const nodes: { [key: string]: { id: string; layer: number; index: number; incoming: any[]; outgoing: any[]; activated: boolean } } = {};
    const edges: { id: string; start: { id: string; layer: number; index: number; incoming: any[]; outgoing: any[]; activated: boolean }; end: { id: string; layer: number; index: number; incoming: any[]; outgoing: any[]; activated: boolean }; activated: boolean }[] = [];

    // Initialize nodes
    for (let layer = 0; layer < layers.length; layer++) {
      for (let nodeIndex = 0; nodeIndex < layers[layer]; nodeIndex++) {
        const nodeId = `${layer}-${nodeIndex}`;
        nodes[nodeId] = {
          id: nodeId,
          layer,
          index: nodeIndex,
          incoming: [],
          outgoing: [],
          activated: false,
        };
      }
    }

    // Connect nodes between adjacent layers only
    for (let layer = 0; layer < layers.length - 1; layer++) {
      const currentLayerNodes = layers[layer];
      const nextLayerNodes = layers[layer + 1];

      // First, connect nodes from current layer to next layer
      for (let nodeIndex = 0; nodeIndex < currentLayerNodes; nodeIndex++) {
        const sourceNodeId = `${layer}-${nodeIndex}`;
        const numConnections = 1 + Math.floor(Math.random() * 2);
        const targetIndices = new Set();

        while (targetIndices.size < numConnections) {
          targetIndices.add(Math.floor(Math.random() * nextLayerNodes));
        }

        targetIndices.forEach((targetIndex) => {
          const targetNodeId = `${layer + 1}-${targetIndex}`;
          const edgeId = `${sourceNodeId}->${targetNodeId}`;
          if (!edges.some((edge) => edge.id === edgeId)) {
            const edge = {
              id: edgeId,
              start: nodes[sourceNodeId],
              end: nodes[targetNodeId],
              activated: false,
            };
            edges.push(edge);
            nodes[sourceNodeId].outgoing.push(edge);
            nodes[targetNodeId].incoming.push(edge);
          }
        });
      }

      // Ensure each node in the next layer has at least one incoming edge
      for (let nextNodeIndex = 0; nextNodeIndex < nextLayerNodes; nextNodeIndex++) {
        const nextNodeId = `${layer + 1}-${nextNodeIndex}`;
        const nextNode = nodes[nextNodeId];

        if (nextNode.incoming.length === 0) {
          // Connect this node to a random node in the current layer
          const randomSourceIndex = Math.floor(Math.random() * currentLayerNodes);
          const sourceNodeId = `${layer}-${randomSourceIndex}`;
          const edgeId = `${sourceNodeId}->${nextNodeId}`;
          if (!edges.some((edge) => edge.id === edgeId)) {
            const edge = {
              id: edgeId,
              start: nodes[sourceNodeId],
              end: nextNode,
              activated: false,
            };
            edges.push(edge);
            nodes[sourceNodeId].outgoing.push(edge);
            nextNode.incoming.push(edge);
          }
        }
      }
    }

    return { nodes, edges };
  };

  useEffect(() => {
    const generatedGraph = generateGraph();
    setGraph(generatedGraph);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activateNode = async (nodeId: string) => {
    const node = graph.nodes[nodeId];

    if (node.activated) return;

    // If the node is in the last layer, activate it regardless of incoming edges
    if (node.layer === layers.length - 1) {
      setActiveNodes((prev) => [...prev, nodeId]);
      node.activated = true;
      await new Promise((r) => setTimeout(r, 50));
      return;
    }

    // Check if all incoming edges are activated
    const allIncomingActivated = node.incoming.every((edge) => edge.activated);

    if (!allIncomingActivated && node.incoming.length > 0) return;

    // Activate node
    setActiveNodes((prev) => [...prev, nodeId]);
    node.activated = true;
    await new Promise((r) => setTimeout(r, 50));

    // Activate outgoing edges
    for (const edge of node.outgoing) {
      if (!edge.activated) {
        const edgeId = edge.id;
        setActiveWeights((prev) => [...prev, edgeId]);
        edge.activated = true;
        await new Promise((r) => setTimeout(r, 50));
        // Recursively activate the target node
        await activateNode(edge.end.id);
      }
    }

    onNodeActivated?.(nodeId);
  };

  useEffect(() => {
    const animate = async () => {
      if (animationCompleted.current) return;

      // Start by activating input nodes (nodes in layer 0)
      const inputNodes = Object.values(graph.nodes).filter(
        (node) => node.layer === 0
      );
      for (const node of inputNodes) {
        await activateNode(node.id);
      }

      // Ensure the last nodes are activated
      const lastLayerIndex = layers.length - 1;
      const lastLayerNodes = Object.values(graph.nodes).filter(
        (node) => node.layer === lastLayerIndex
      );
      for (const node of lastLayerNodes) {
        if (!node.activated) {
          await activateNode(node.id);
        }
      }

      // Generate output tokens
      for (const token of tokens) {
        await new Promise((r) => setTimeout(r, 100));
        onTokenGenerated?.(token);
      }

      onComplete?.();
      animationCompleted.current = true;
    };

    if (Object.keys(graph.nodes).length > 0) {
      animate();
    }
  }, [graph]);

  const getNodePosition = (layerIndex: number, nodeIndex: number, totalNodes: number) => {
    const horizontalSpacing = windowWidth < 768 ? 60 : 120;
    const verticalPadding = 20;
    const containerHeight = windowWidth < 768 ? 200 : 400;
    const availableHeight = containerHeight - verticalPadding * 2;
    const verticalSpacing =
      totalNodes > 1 ? availableHeight / (totalNodes - 1) : 0;

    const numLayers = layers.length;
    const totalGraphWidth = (numLayers - 1) * horizontalSpacing;

    const graphStartX = (containerWidth - totalGraphWidth) / 2;

    return {
      x: graphStartX + layerIndex * horizontalSpacing,
      y: verticalPadding + nodeIndex * verticalSpacing,
    };
  };

  const calculateConnectionStyle = (sourcePos: { x: number; y: number }, targetPos: { x: number; y: number }) => {
    const dx = targetPos.x - sourcePos.x;
    const dy = targetPos.y - sourcePos.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    const nodeSize = windowWidth < 768 ? 12 : 24;

    return {
      width: `${length}px`,
      height: '2px',
      transform: `rotate(${angle}deg)`,
      transformOrigin: 'left center',
      position: 'absolute',
      left: `${sourcePos.x + nodeSize / 2}px`,
      top: `${sourcePos.y + nodeSize / 2}px`,
    };
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.llmArchitecture} ref={containerRef}>
        {/* Draw edges first */}
        {graph.edges.map((edge) => {
          const sourcePos = getNodePosition(
            edge.start.layer,
            edge.start.index,
            layers[edge.start.layer]
          );
          const targetPos = getNodePosition(
            edge.end.layer,
            edge.end.index,
            layers[edge.end.layer]
          );

          return (
            <div
              key={`edge-${edge.id}`}
              className={`${styles.weight} ${
                activeWeights.includes(edge.id) ? styles.weightActive : ''
              }`}
              style={calculateConnectionStyle(sourcePos, targetPos) as React.CSSProperties}
            />
          );
        })}

        {/* Draw nodes */}
        {Object.values(graph.nodes).map((node) => {
          const pos = getNodePosition(node.layer, node.index, layers[node.layer]);
          return (
            <div
              key={`node-${node.id}`}
              className={`${styles.node} ${
                activeNodes.includes(node.id) ? styles.nodeActive : ''
              }`}
              style={{
                position: 'absolute',
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                width: windowWidth < 768 ? '12px' : '24px',
                height: windowWidth < 768 ? '12px' : '24px',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const LLMConversation = () => {
  const promptTokens = ['Who', 'is', 'Hugo', '?'];

  const [isMounted, setIsMounted] = useState(false);
  const [showArchitecture, setShowArchitecture] = useState(false);
  const [outputTokens, setOutputTokens] = useState<string[]>([]);
  const [, setCurrentStep] = useState(0);
  const controls = useAnimation();
  const [connectedTokens, setConnectedTokens] = useState(new Set());

  const connectTokenToNode = (tokenIndex: number) => {
    setConnectedTokens(prev => new Set([...prev, tokenIndex]));
  };

  useEffect(() => {
    const animate = async () => {
      setIsMounted(true);
      setShowArchitecture(true);
      // Show prompt immediately
      await controls.start({
        opacity: 1,
        transition: { duration: 0.5 },
      });
    };

    animate();

    return () => {
      controls.stop();
      setCurrentStep(0);
    };
  }, [controls]);

  const handleTokenGenerated = (token: string) => {
    setOutputTokens((prev) => [...prev, token]);
  };

  if (!isMounted) {
    return null;
  }

  // Split tokens into two columns
  const half = Math.ceil(outputTokens.length / 2);
  const firstColumnTokens = outputTokens.slice(0, half);
  const secondColumnTokens = outputTokens.slice(half);

  return (
    <div className={styles.conversation}>
      <div className={styles.promptContainer}>
        <div className={styles.tokenContainer}>
          {promptTokens.map((token, i) => (
            <div key={i} className="relative">
              <motion.span
                className={`${styles.tokenOutput} ${
                  connectedTokens.has(i) ? styles.connected : ''
                }`}
                initial={{ scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                {token}
              </motion.span>
              <motion.div
                className={`${styles.tokenConnection} ${
                  connectedTokens.has(i) ? styles.active : ''
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: connectedTokens.has(i) ? 1 : 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.llmContainer} ${showArchitecture ? styles.visible : ''}`}>
        {showArchitecture && (
          <LLMArchitecture
            onComplete={() => setCurrentStep(1)}
            onTokenGenerated={handleTokenGenerated}
            onNodeActivated={(nodeId) => {
              const layer = parseInt(nodeId.split('-')[0]);
              if (layer === 0) {
                const index = parseInt(nodeId.split('-')[1]);
                connectTokenToNode(index);
              }
            }}
          />
        )}
      </div>

      <div className={styles.outputContainer}>
        <div className={styles.outputTokenContainer}>
          <div className={styles.column}>
            {firstColumnTokens.map((token, i) => (
              <motion.span
                key={i}
                className={styles.tokenOutput}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                {token}
              </motion.span>
            ))}
          </div>
          <div className={styles.column}>
            {secondColumnTokens.map((token, i) => (
              <motion.span
                key={i}
                className={styles.tokenOutput}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                {token}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundLayer}>
        <div className={styles.backgroundImage}></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        {isMounted ? (
          <>
            <motion.h1
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.heroTitle}
            >
              Conversational AI
            </motion.h1>
            <motion.p
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={styles.heroSubtitle}
            >
              Building a chatbot using GPT-3 and React
            </motion.p>

            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={styles.heroIllustration}
            >
              <LLMConversation />
            </motion.div>
          </>
        ) : (
          <>
            <h1 className={styles.heroTitle}>Conversational AI</h1>
            <p className={styles.heroSubtitle}>
              Building a chatbot using GPT-3 and React
            </p>
            <div className={styles.heroIllustration}></div>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
