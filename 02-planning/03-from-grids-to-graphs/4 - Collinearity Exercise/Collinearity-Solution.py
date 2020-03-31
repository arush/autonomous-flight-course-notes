#!/usr/bin/env python
# coding: utf-8

# ## Collinearity Check
# Collinearity for any three points can be determined easily by taking the determinant of a matrix containing the points.

# In[1]:


# Define Points (feel free to change these)
# By default these will be cast as int64 arrays
import numpy as np
p1 = np.array([1, 2])
p2 = np.array([2, 3])
p3 = np.array([3, 4])


# ### 3D case
# 
# Define a function to determine collinearity for the 3D case using the `np.linalg.det()` function. Introduce the `epsilon` threshold to deal with numerical precision issues and/or allow a tolerance for collinearity. If the determinant is less than `epsilon` then the points are collinear. 

# In[2]:


# Define a simple function to add a z coordinate of 1
def point(p):
    return np.array([p[0], p[1], 1.])

def collinearity_float(p1, p2, p3, epsilon=1e-6): 
    collinear = False
    # TODO: Create the matrix out of three points
    # Add points as rows in a matrix
    mat = np.vstack((point(p1), point(p2), point(p3)))
    # TODO: Calculate the determinant of the matrix. 
    det = np.linalg.det(mat)
    # TODO: Set collinear to True if the determinant is less than epsilon
    if det < epsilon:
        collinear = True
        
    return collinear


# ### 2D Case
# Define a function to take three points and test for collinearity by evaluating the determinant using the simplified version for the 2D case:
# 
# $ det = x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)$

# In[3]:


def collinearity_int(p1, p2, p3): 
    collinear = False
    # TODO: Calculate the determinant of the matrix using integer arithmetic 
    det = p1[0]*(p2[1] - p3[1]) + p2[0]*(p3[1] - p1[1]) + p3[0]*(p1[1] - p2[1])
    # TODO: Set collinear to True if the determinant is equal to zero
    if det == 0:
        collinear = True

    return collinear


# ### Test it and time it (run this a couple time, sometimes doesn't work on the first try)

# In[4]:


import time
t1 = time.time()
collinear = collinearity_float(p1, p2, p3)
t_3D = time.time() - t1

t1 = time.time()
collinear = collinearity_int(p1, p2, p3)
t_2D = time.time() - t1
print(t_3D/t_2D)


# ### Which one is faster ???

# In[ ]:




