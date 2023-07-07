from ctypes import cast, POINTER
from comtypes import CLSCTX_ALL
from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume


devices = AudioUtilities.GetSpeakers()
interfaces = devices.Activate(IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
volume = cast(interfaces, POINTER(IAudioEndpointVolume))

# volume.SetMasterVolumeLevel(0, None) # -65 to 0
# volume.SetMute(1, None)

