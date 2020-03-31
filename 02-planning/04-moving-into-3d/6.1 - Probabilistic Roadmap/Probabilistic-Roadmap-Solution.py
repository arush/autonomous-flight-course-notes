#!/usr/bin/env python
# coding: utf-8

# # Probabilistic Roadmap
# 
# 
# In this notebook you'll expand on previous random sampling exercises by creating a graph from the points and running A*.
# 
# 1. Load the data
# 2. Sample nodes
# 3. Connect nodes
# 4. Visualize graph
# 5. Define heuristic
# 6. Define search method
# 7. Execute and visualize
# 
# We'll load the data and provide a template for visualization.

# In[2]:


# Again, ugly but we need the latest version of networkx!
# This sometimes fails for unknown reasons, please just 
# "reset and clear output" from the "Kernel" menu above 
# and try again!
import sys
get_ipython().system('{sys.executable} -m pip install -I networkx==2.1')
import pkg_resources
pkg_resources.require("networkx==2.1")
import networkx as nx


# In[3]:


nx.__version__ # should be 2.1


# In[4]:


import numpy as np
import matplotlib.pyplot as plt
from sampling import Sampler
from shapely.geometry import Polygon, Point, LineString
from queue import PriorityQueue

get_ipython().run_line_magic('matplotlib', 'inline')


# In[5]:


plt.rcParams['figure.figsize'] = 12, 12


# ## Step 1 - Load Data

# In[6]:


# This is the same obstacle data from the previous lesson.
filename = 'colliders.csv'
data = np.loadtxt(filename, delimiter=',', dtype='Float64', skiprows=2)
print(data)


# ## Step 2 - Sample Points
# 
# We've implemented a custom sampling class using a k-d tree.

# In[7]:


from sampling import Sampler


# In[8]:


sampler = Sampler(data)
polygons = sampler._polygons


# In[9]:


# Example: sampling 100 points and removing
# ones conflicting with obstacles.
nodes = sampler.sample(300)
print(len(nodes))


# ## Step 3 - Connect Nodes
# 
# Now we have to connect the nodes. There are many ways they might be done, it's completely up to you. The only restriction being no edge connecting two nodes may pass through a polygon.
# 
# NOTE: You can use `LineString` to create a line. Additionally, `shapely` geometry objects have a method `.crosses` which return `True` if the geometries cross paths.

# In[10]:


import numpy.linalg as LA
from sklearn.neighbors import KDTree


# In[11]:


def can_connect(n1, n2):
    l = LineString([n1, n2])
    for p in polygons:
        if p.crosses(l) and p.height >= min(n1[2], n2[2]):
            return False
    return True

def create_graph(nodes, k):
    g = nx.Graph()
    tree = KDTree(nodes)
    for n1 in nodes:
        # for each node connect try to connect to k nearest nodes
        idxs = tree.query([n1], k, return_distance=False)[0]
        
        for idx in idxs:
            n2 = nodes[idx]
            if n2 == n1:
                continue
                
            if can_connect(n1, n2):
                g.add_edge(n1, n2, weight=1)
    return g


# In[12]:


import time
t0 = time.time()
g = create_graph(nodes, 10)
print('graph took {0} seconds to build'.format(time.time()-t0))


# In[13]:


print("Number of edges", len(g.edges))


# ## Step 4 - Visualize Graph

# In[14]:


from grid import create_grid


# In[15]:


grid = create_grid(data, sampler._zmax, 1)


# In[16]:


fig = plt.figure()

plt.imshow(grid, cmap='Greys', origin='lower')

nmin = np.min(data[:, 0])
emin = np.min(data[:, 1])

# draw edges
for (n1, n2) in g.edges:
    plt.plot([n1[1] - emin, n2[1] - emin], [n1[0] - nmin, n2[0] - nmin], 'black' , alpha=0.5)

# draw all nodes
for n1 in nodes:
    plt.scatter(n1[1] - emin, n1[0] - nmin, c='blue')
    
# draw connected nodes
for n1 in g.nodes:
    plt.scatter(n1[1] - emin, n1[0] - nmin, c='red')
    


plt.xlabel('NORTH')
plt.ylabel('EAST')

plt.show()


# ## Step 5 - Define Heuristic

# In[17]:


def heuristic(n1, n2):
    # TODO: finish
    return LA.norm(np.array(n2) - np.array(n1))


# ## Step 6 - Complete A*

# In[18]:


def a_star(graph, heuristic, start, goal):
    """Modified A* to work with NetworkX graphs."""
    
    # TODO: complete

    path = []
    queue = PriorityQueue()
    queue.put((0, start))
    visited = set(start)

    branch = {}
    found = False
    
    while not queue.empty():
        item = queue.get()
        current_cost = item[0]
        current_node = item[1]

        if current_node == goal:        
            print('Found a path.')
            found = True
            break
        else:
            for next_node in graph[current_node]:
                cost = graph.edges[current_node, next_node]['weight']
                new_cost = current_cost + cost + heuristic(next_node, goal)
                
                if next_node not in visited:                
                    visited.add(next_node)               
                    queue.put((new_cost, next_node))
                    
                    branch[next_node] = (new_cost, current_node)
             
    path = []
    path_cost = 0
    if found:
        
        # retrace steps
        path = []
        n = goal
        path_cost = branch[n][0]
        while branch[n][1] != start:
            path.append(branch[n][1])
            n = branch[n][1]
        path.append(branch[n][1])
            
    return path[::-1], path_cost


# In[19]:


start = list(g.nodes)[0]
k = np.random.randint(len(g.nodes))
print(k, len(g.nodes))
goal = list(g.nodes)[k]


# In[20]:


path, cost = a_star(g, heuristic, start, goal)
print(len(path), path)


# In[21]:


path_pairs = zip(path[:-1], path[1:])
for (n1, n2) in path_pairs:
    print(n1, n2)


# ## Step 7 - Visualize Path

# In[23]:


fig = plt.figure()

plt.imshow(grid, cmap='Greys', origin='lower')

nmin = np.min(data[:, 0])
emin = np.min(data[:, 1])

# draw nodes
for n1 in g.nodes:
    plt.scatter(n1[1] - emin, n1[0] - nmin, c='red')
    
# draw edges
for (n1, n2) in g.edges:
    plt.plot([n1[1] - emin, n2[1] - emin], [n1[0] - nmin, n2[0] - nmin], 'yellow')
    
# TODO: add code to visualize the path
path_pairs = zip(path[:-1], path[1:])
for (n1, n2) in path_pairs:
    plt.plot([n1[1] - emin, n2[1] - emin], [n1[0] - nmin, n2[0] - nmin], 'green')


plt.xlabel('NORTH')
plt.ylabel('EAST')

plt.show()


# In[ ]:





# In[ ]:




