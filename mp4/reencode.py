import subprocess
import os

for file in os.listdir("."):
    if (file.split(".")[-1] == "mp4"):
        file = str(file)
        file_temp = f"temp_{str(file)}"

        cmd = ""
        cmd += "ffmpeg -i "
        cmd += file
        cmd += " -c:v libx264 -pix_fmt yuv420p -c:a aac -movflags +faststart "
        cmd += file_temp
        cmd += " -y"

        subprocess.run(cmd, shell=True)
        os.replace(file_temp, file)