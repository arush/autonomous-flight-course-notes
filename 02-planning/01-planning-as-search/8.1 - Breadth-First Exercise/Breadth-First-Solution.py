#!/usr/bin/env python
# coding: utf-8

# # Breadth-First Search

# In this exercise you'll implement the breadth first search algorithm.

# In[1]:


# Import numpy, Enum and Queue
from queue import Queue 
import numpy as np
from enum import Enum


# https://wiki.python.org/moin/TimeComplexity gives a solid overview of Python data structures and their time complexity.

# * [`Enum`](https://docs.python.org/3/library/enum.html#module-enum) is used to represent possible actions on the grid.
# * A [`Queue`](https://docs.python.org/3/library/queue.html) is used to cycle through the positions since it has O(1) complexity enqueue and dequeue times.

# In[18]:


# Define a start and goal location
start = (0, 0)
goal = (4, 4)
# Define your grid-based state space of obstacles and free space
grid = np.array([
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 0, 0],
])


# In[19]:


# Define your action set using Enum()
class Action(Enum): 
    # Actions are tuples corresponding to movements in (i, j)
    LEFT = (0, -1)
    RIGHT = (0, 1)
    UP = (-1, 0)
    DOWN = (1, 0)
    # Define string characters for each action
    def __str__(self):
        if self == self.LEFT:
            return '<'
        elif self == self.RIGHT:
            return '>'
        elif self == self.UP:
            return '^'
        elif self == self.DOWN:
            return 'v'
            
# Define a function that returns a list of valid actions 
# through the grid from the current node
def valid_actions(grid, current_node):
    """
    Returns a list of valid actions given a grid and current node.
    """
    # First define a list of all possible actions
    valid = [Action.UP, Action.LEFT, Action.RIGHT, Action.DOWN]
    # Retrieve the grid shape and position of the current node
    n, m = grid.shape[0] - 1, grid.shape[1] - 1
    x, y = current_node
    
    # check if the node is off the grid or it's an obstacle
    # If it is either, remove the action that takes you there
    
    if x - 1 < 0 or grid[x-1, y] == 1:
        valid.remove(Action.UP)
    if x + 1 > n or grid[x+1, y] == 1:
        valid.remove(Action.DOWN)
    if y - 1 < 0 or grid[x, y-1] == 1:
        valid.remove(Action.LEFT)
    if y + 1 > m or grid[x, y+1] == 1:
        valid.remove(Action.RIGHT)
        
    return valid

# Define a function to visualize the path
def visualize_path(grid, path, start):
    """
    Given a grid, path and start position
    return visual of the path to the goal.
    
    'S' -> start 
    'G' -> goal
    'O' -> obstacle
    ' ' -> empty
    """
    # Define a grid of string characters for visualization
    sgrid = np.zeros(np.shape(grid), dtype=np.str)
    sgrid[:] = ' '
    sgrid[grid[:] == 1] = 'O'
    
    pos = start
    # Fill in the string grid
    for a in path:
        da = a.value
        sgrid[pos[0], pos[1]] = str(a)
        pos = (pos[0] + da[0], pos[1] + da[1])
    sgrid[pos[0], pos[1]] = 'G'
    sgrid[start[0], start[1]] = 'S'  
    return sgrid


# ### Breadth-First Algorithm
# 
# In this section you will implement breadth-first search. The main body of the function is already given. You will need to implement the remaining `TODOs`.

# In[20]:


# Define your breadth-first search function here
def breadth_first(grid, start, goal):

    # TODO: Replace the None values for 
        # "queue" and "visited" with data structure objects
        # and add the start position to each 
    queue = Queue()
    queue.put(start)
    visited = set()
    visited.add(start)

    branch = {}
    found = False
    # Run loop while queue is not empty
    while not queue.empty():
        # TODO: Remove the first element from the queue
        current_node = queue.get()

        # TODO: Check if the current 
            # node corresponds to the goal state
        if current_node == goal:        
            print('Found a path.')
            found = True
            break
        else:
            # TODO: Get the new nodes connected to the current node
            # Iterate through each of the new nodes and:
            # If the node has not been visited you will need to
            # 1. Mark it as visited
            # 2. Add it to the queue
            # 3. Add how you got there to the branch dictionary 
            for a in valid_actions(grid, current_node):
                # delta of performing the action
                da = a.value
                next_node = (current_node[0] + da[0], current_node[1] + da[1])
                if next_node not in visited:                
                    visited.add(next_node)               
                    queue.put(next_node)
                    branch[next_node] = (current_node, a)
             
    # Now, if you found a path, retrace your steps through 
    # the branch dictionary to find out how you got there!
    path = []
    if found:
        # retrace steps
        path = []
        n = goal
        while branch[n][0] != start:
            path.append(branch[n][1])
            n = branch[n][0]
        path.append(branch[n][1])
            
    return path[::-1]


# ### Executing the search
# 
# Run `breath_first()` and reference the grid to see if the path makes sense.

# In[21]:


path = breadth_first(grid, start, goal)
print(path)


# In[22]:


# S -> start, G -> goal, O -> obstacle
visualize_path(grid, path, start)


# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:




