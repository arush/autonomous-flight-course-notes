class FrameMessage(Message):
    """Message representating frame information
    Messages defining the rotation between frames (Euler angles or Quaternions)
    Attributes:
        _roll: drone roll in radians
        _pitch: drone pitch in radians
        _yaw: drone yaw in radians
        _q0: 0th element of quaterion
        _q1: 1th element of quaterion
        _q2: 2th element of quaterion
        _q3: 3th element of quaterion
    """

    def __init__(self, *args):
        if len(args) == 4:
            self.init_euler(args[0], args[1], args[2], args[3])
        elif len(args) == 5:
            self.init_quaternion(args[0], args[1], args[2], args[3], args[4])

    def init_euler(self, time, roll, pitch, yaw):
        super().__init__(time)

        self._roll = roll
        self._pitch = pitch
        self._yaw = yaw

        sp = np.sin(pitch / 2.0)
        cp = np.cos(pitch / 2.0)
        sr = np.sin(roll / 2.0)
        cr = np.cos(roll / 2.0)
        sy = np.sin(yaw / 2.0)
        cy = np.cos(yaw / 2.0)

        self._q0 = cr * cp * cy + sr * sp * sy
        self._q1 = sr * cp * cy - cr * sp * sy
        self._q2 = cr * sp * cy + sr * cp * sy
        self._q3 = cr * cp * sy - sr * sp * cy

    def init_quaternion(self, time, q0, q1, q2, q3):
        super().__init__(time)
        self._q0 = q0
        self._q1 = q1
        self._q2 = q2
        self._q3 = q3

        self._roll = np.arctan2(2.0 * (q0 * q1 + q2 * q3), 1.0 - 2.0 * (q1**2 + q2**2))
        self._pitch = np.arcsin(2.0 * (q0 * q2 - q3 * q1))
        self._yaw = np.arctan2(2.0 * (q0 * q3 + q1 * q2), 1.0 - 2.0 * (q2**2 + q3**2))

    @property
    def roll(self):
        """roll in radians"""
        return self._roll

    @property
    def pitch(self):
        """pitch in radians"""
        return self._pitch

    @property
    def yaw(self):
        """yaw in radians"""
        return self._yaw

    @property
    def euler_angles(self):
        """float array: numpy array of the euler angles [roll, pitch, yaw] """
        return np.array([self._roll, self._pitch, self._yaw])

    @property
    def quaternions(self):
        """float array: numpy array of the quaternion vector """
        return np.array([self._q0, self._q1, self._q2, self._q3])

    @property
    def q0(self):
        """float: 0th element of quaternion """
        return self._q0

    @property
    def q1(self):
        """float: 1st element of quaternion """
        return self._q1

    @property
    def q2(self):
        """float: 2nd element of quaternion """
        return self._q2

    @property
    def q3(self):
        """float: 3rd element of quaternion """
        return self._q3


