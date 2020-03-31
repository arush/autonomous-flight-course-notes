#!/usr/bin/env python
# coding: utf-8

# ### Geodetic to NED 
# 
# In the projects for this program, you'll be working with simulated GPS data coming to you as (*longitude, latitude, altitude*) and you'll need to convert to local (*north, east, down*) coordinates. Your job in this exercise is to write functions to do just that!  

# In[1]:


# First import the utm and numpy packages
import utm
import numpy


# To convert a GPS position (_longitude_, _latitude_, _altitude_) to a local position (_north_, _east_, _down_) you need to define a global home position as the origin of your NED coordinate frame. In general this might be the position your vehicle is in when the motors are armed, or some other home base position. You first task is to define a function to convert from global position to a local position using the `utm`. To do this fill in the TODO's below!

# In[2]:


def global_to_local(global_position, global_home):
    
    (east_home, north_home, _, _) = utm.from_latlon(global_home[1], global_home[0])
    
    (east, north, _, _) = utm.from_latlon(global_position[1], global_position[0])
                                          
    local_position = numpy.array([north - north_home, east - east_home, -(global_position[2] - global_home[2])])
    
    return local_position


# ### NED to Geodetic
# Now try converting a local position (_north_, _east_, _down_) relative to the home position to a global position (_long_, _lat_, _up_).

# In[3]:


def local_to_global(local_position, global_home):
    (east_home, north_home, zone_number, zone_letter) = utm.from_latlon(
                                                        global_home[1], global_home[0])
    
    (lat, lon) = utm.to_latlon(east_home + local_position[1],
                               north_home + local_position[0], zone_number,
                               zone_letter)
                               
    global_position = numpy.array([lon, lat, -(local_position[2]-global_home[2])])
    
    return global_position


# As an example, we will use two sets of global coordinates. One **```geodetic_home_coordinates```** serving as a local origin for NED frame and the second **```geodetic_current_coordinates```** which we will be expressed in NED coordinates relative to the first one. 

# In[4]:


numpy.set_printoptions(precision=2)

geodetic_current_coordinates = [-122.079465, 37.393037, 30]
geodetic_home_coordinates = [-122.108432, 37.400154, 20]

local_coordinates_NED = global_to_local(geodetic_current_coordinates, geodetic_home_coordinates)

print(local_coordinates_NED)
# Should print [ -764.96  2571.59   -10.  ]


# In this example, we will do the reverse transform by obtaining the global coordinated by knowing NED coordinates relative to the other global coordinates. 

# In[5]:


numpy.set_printoptions(precision=6)
NED_coordinates =[25.21, 128.07, -30.]


# convert back to global coordinates
geodetic_current_coordinates = local_to_global(NED_coordinates, geodetic_home_coordinates)

print(geodetic_current_coordinates)
# Should print [-122.106982   37.40037    50.      ]


# In[ ]:




