#!/usr/bin/env python
# coding: utf-8

# # Cost Search

# In this exercise you'll implement extend breadth-first search by incorporating a cost penalty.

# In[1]:


from queue import Queue, PriorityQueue
import numpy as np
from enum import Enum


# https://wiki.python.org/moin/TimeComplexity gives a solid overview of Python data structures and their time complexity.

# * [`Enum`](https://docs.python.org/3/library/enum.html#module-enum) is used to represent possible actions on the grid.
# * A [`PriorityQueue`](https://docs.python.org/3/library/queue.html#queue.PriorityQueue) is used in order to prioritize expanding nodes with lower cost. The naive approach would take `O(n)` time since we would scan the entire queue to determine the position of the item. A `PriorityQueue` allows this insertion to be done in `O(log(n))` time instead.

# In[2]:


class Action(Enum):
    """
    An action is represented by a 3 element tuple.
    
    The first 2 values are the delta of the action relative
    to the current grid position. The third and final value
    is the cost of performing the action.
    """
    LEFT = (0, -1, 1)
    RIGHT = (0, 1, 1)
    UP = (-1, 0, 1)
    DOWN = (1, 0, 1)
    
    def __str__(self):
        if self == self.LEFT:
            return '<'
        elif self == self.RIGHT:
            return '>'
        elif self == self.UP:
            return '^'
        elif self == self.DOWN:
            return 'v'
    
    @property
    def cost(self):
        return self.value[2]
    
    @property
    def delta(self):
        return (self.value[0], self.value[1])
            
    
def valid_actions(grid, current_node):
    """
    Returns a list of valid actions given a grid and current node.
    """
    valid = [Action.UP, Action.LEFT, Action.RIGHT, Action.DOWN]
    n, m = grid.shape[0] - 1, grid.shape[1] - 1
    x, y = current_node
    
    # check if the node is off the grid or
    # it's an obstacle
    
    if x - 1 < 0 or grid[x-1, y] == 1:
        valid.remove(Action.UP)
    if x + 1 > n or grid[x+1, y] == 1:
        valid.remove(Action.DOWN)
    if y - 1 < 0 or grid[x, y-1] == 1:
        valid.remove(Action.LEFT)
    if y + 1 > m or grid[x, y+1] == 1:
        valid.remove(Action.RIGHT)
        
    return valid

def visualize_path(grid, path, start):
    sgrid = np.zeros(np.shape(grid), dtype=np.str)
    sgrid[:] = ' '
    sgrid[grid[:] == 1] = 'O'
    
    pos = start
    
    for a in path:
        da = a.value
        sgrid[pos[0], pos[1]] = str(a)
        pos = (pos[0] + da[0], pos[1] + da[1])
    sgrid[pos[0], pos[1]] = 'G'
    sgrid[start[0], start[1]] = 'S'  
    return sgrid


# ### Cost Search
# 
# In this section you will extend the breadth-first search algorithm by incorporating a cost for each action. Your task is to compute the lowest cost path.
# 
# You will need to implement the remaining `TODOs`.

# In[3]:


def uniform_cost(grid, start, goal):

    # TODO: Initialize the starting variables
    path = []
    queue = PriorityQueue()
    queue.put((0, start))
    visited = set(start)

    branch = {}
    found = False
    
    while not queue.empty():
        # TODO: Remove the first element from the queue
        item = queue.get()
        current_cost = item[0]
        current_node = item[1]

        # TODO: Check if the current vertex corresponds to the goal state
        # and set `found` to True if that's the case.
        if current_node == goal:        
            print('Found a path.')
            found = True
            break
        else:
            for action in valid_actions(grid, current_node):
                # get the tuple representation
                da = action.delta
                cost = action.cost
                next_node = (current_node[0] + da[0], current_node[1] + da[1])
                new_cost = current_cost + cost
                
                # TODO: Check if the new vertex has not been visited before.
                # If the node has not been visited you will need to
                # 1. Mark it as visited
                # 2. Add it to the queue
                if next_node not in visited:                
                    visited.add(next_node)               
                    queue.put((new_cost, next_node))
                    
                    branch[next_node] = (new_cost, current_node, action)
             
    path = []
    path_cost = 0
    if found:
        
        # retrace steps
        path = []
        n = goal
        path_cost = branch[n][0]
        while branch[n][1] != start:
            path.append(branch[n][2])
            n = branch[n][1]
        path.append(branch[n][2])
            
    return path[::-1], path_cost


# ### Executing the search
# 
# Run `uniform_cost()` and reference the grid to see if the path makes sense.

# In[4]:


start = (0, 0)
goal = (4, 4)

grid = np.array([
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0],
])


# In[5]:


path, path_cost = uniform_cost(grid, start, goal)
print(path_cost, path)


# In[6]:


# S -> start, G -> goal, O -> obstacle
visualize_path(grid, path, start)


# In[ ]:





# In[ ]:





# In[ ]:




