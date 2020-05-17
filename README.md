# Autonomous Flight Course & My Notes

Read my Medium series here: [https://medium.com/building-autonomous-flight-software](https://medium.com/building-autonomous-flight-software)

This repo contains all the videos and learning material for the Autonomous Flight course, the most valuable part is the course notes that I wrote summarizing the content in each video.

## Video Lectures and Python exercises
Videos and exercises for every lecture are in the corresponding lesson folders

## My Course Notes
* [03 - Control.md](03_-_Control.md) -> [Dropbox Paper](https://paper.dropbox.com/doc/FCND-03-Control--AzT6u4Pcin7bVTKWeuu_i5ltAQ-irVk0GzJyFZV5JC3AHSX7)
* [04 - Estimation - 01 - Intro to Estimation.md](04_-_Estimation_-_01_-_Intro_to_Estimation.md) -> [Dropbox Paper](https://paper.dropbox.com/doc/FCND-04-Estimation-01-Intro-to-Estimation-kIsPI3VdoMV7fWHkYatHm)
* [04 - Estimation - 02 - Intro to Sensors.md](04_-_Estimation_-_02_-_Intro_to_Sensors.md) -> [Dropbox Paper](https://paper.dropbox.com/doc/FCND-04-Estimation-02-Intro-to-Sensors-f8ClXg3WfHWqJ7PDUqbwG)
* [04 - Estimation - 03 - Extended Kalman Fil.md](04_-_Estimation_-_03_-_Extended_Kalman_Fil.md) -> [Dropbox Paper](https://paper.dropbox.com/doc/FCND-04-Estimation-03-Extended-Kalman-Filters-2cV3UVce34YuHNVbcboxj)
* [04 - Estimation - 04 - 3D EKF and UKF.md](04_-_Estimation_-_04_-_3D_EKF_and_UKF.md) -> [Dropbox Paper](https://paper.dropbox.com/doc/FCND-04-Estimation-04-3D-EKF-and-UKF--AzSAYnPZi7f9Pab7T0DCt0LUAg-1s16stgLENx2NRjvmlgIA)

## My Coursework

1. [3D Motion Planning](https://github.com/arush/motion-planning-project) and [Demo video on youtube](https://www.youtube.com/watch?v=VtXHbCOOd1I&feature=youtu.be)
2. [C++ Flight Controller](https://github.com/arush/flight-controller)
3. [Sensor Fusion for State Estimation](https://github.com/arush/state-estimation) uses complimentary filters and an extended kalman filter and explains all the mathematics behind them.

## Other Resources
- [Bitcraze crazyflie EKF implementation](https://github.com/bitcraze/crazyflie-firmware/blob/master/src/modules/src/estimator_kalman.c)
- [Estimation_for_Quadrotors_.pdf](Estimation_for_Quadrotors_.pdf) - formulas for implementing EKF for autonomous flight sensors
- [Quadcopter Dynamics, Simulation and Control](.quad_dynamics_simulation_control.pdf) : [https://andrew.gibiansky.com/blog/physics/quadcopter-dynamics/](https://andrew.gibiansky.com/blog/physics/quadcopter-dynamics/)
- [Kalman filter 55 video series](https://www.youtube.com/playlist?list=PLX2gX-ftPVXU3oUFNATxGXY90AULiqnWT)

#### Potential field
- [https://medium.com/@rymshasiddiqui/path-planning-using-potential-field-algorithm-a30ad12bdb08](https://medium.com/@rymshasiddiqui/path-planning-using-potential-field-algorithm-a30ad12bdb08)
- [https://github.com/AtsushiSakai/PythonRobotics/blob/master/PathPlanning/PotentialFieldPlanning/potential_field_planning.py](https://github.com/AtsushiSakai/PythonRobotics/blob/master/PathPlanning/PotentialFieldPlanning/potential_field_planning.py)
- [https://forum.unity.com/threads/ai-influence-maps.145368/](https://forum.unity.com/threads/ai-influence-maps.145368/)
- [https://gamedevelopment.tutsplus.com/tutorials/understanding-goal-based-vector-field-pathfinding--gamedev-9007](https://gamedevelopment.tutsplus.com/tutorials/understanding-goal-based-vector-field-pathfinding--gamedev-9007)


#### Research Papers
- [The Unscented Kalman Filter for Nonlinear Estimation](https://www.seas.harvard.edu/courses/cs281/papers/unscented.pdf) is a short paper (only 6 pages) and does a great job explaining the UKF.
- [A New Extension of the Kalman Filter to Nonlinear Systems](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.5.2891&rep=rep1&type=pdf) is a bit longer (12 pages) and includes some helpful example applications.
- [The Scaled Unscented Transformation](https://www.cs.unc.edu/~welch/kalman/media/pdf/ACC02-IEEE1357.PDF) gives a mathematical derivation of the unscented transform.
- [Fusing Inertial Sensor Data in an Extended Kalman Filter for 3D Camera Tracking](https://eresearch.ozyegin.edu.tr/bitstream/handle/10679/947/Fusing%20inertial%20sensor%20data%20in%20an%20extended%20kalman%20filter%20for%203D%20camera%20tracking.pdf?sequence=2&isAllowed=y)

