// return all nodes in order in which they were visited
//Also make nodes point bak to previous node
// so that we can backtrack from finish node using shortest path

export function dijkstra(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  if (!startNode || !finishNode || startNode === finishNode) {
    return false;
  }
  startNode.distance = 0; // startnode will be at distance 0
  const unvisitedNodes = getAllNodes(grid); // get all nodes in the current grid
  while (!!unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes); //sorts such that closest nodes are in the beginning of the array - like minHeap
    const closestNode = unvisitedNodes.shift(); // to remove and get the first element of array like top of minHeap

    if (closestNode.isWall) continue; // wall then skip it

    if (closestNode.distance === Infinity) return visitedNodesInOrder; // no option left i.e, we are trapped between walls

    closestNode.isVisited = true; // mark is as visited
    visitedNodesInOrder.push(closestNode);
    if (closestNode === finishNode) return visitedNodesInOrder; // desired node has been reached hence loop stops and array is returned
    updateUnvisitedNeighbors(closestNode, grid); // to update the distance of closestNode
  }
}

function getAllNodes(grid) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}

function sortNodesByDistance(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(node, grid) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node; // every neighbors parent node is this current node
  }
}

function getUnvisitedNeighbors(node, grid) {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter((neighbor) => !neighbor.isVisited); // only gives unvisited neighbors
}

export function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    // startNode will have previous node as null
    nodesInShortestPathOrder.unshift(currentNode); // pushes new node in front so that we have path from front ->  end
    currentNode = currentNode.previousNode; // move to parent node of current node
  }
  return nodesInShortestPathOrder; // startNode reached hence return array
}
