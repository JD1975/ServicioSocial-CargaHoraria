import pandas as pd
import numpy as np
from utilities import separateHours 

siiaPath = r'D:\omarg\Descargas\carga siia 232.xlsx' # ! Change for user path
chPath = r'D:\omarg\Descargas\CH 2023-2.xlsx' # ! Change for user path

siia = pd.read_excel(siiaPath, usecols="C:F,H,K,N,R:V,Z,AJ,AL,AN,AP,AR")
ch = pd.read_excel(chPath,skiprows = 4)

# * DATA CLEANING PROCESS

# creates LU, LU.1, etc from LUNES, etc and deletes the unused col
dias = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES']
for d in dias:
    siia[[d[:2] , d[:2]+'.1']] = siia[d].apply(separateHours).apply(pd.Series)
for d in dias:
    siia.drop(d, axis = 1)

# * COMPARE PROCESS
