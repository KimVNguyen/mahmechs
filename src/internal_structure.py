#p.py
import math

class InternalStructure(object):
    @staticmethod
    def calculate(mechTonnage, endo_steel = False):
        if endo_steel:  
            return math.ceil((mechTonnage/10)/2 *2)/2
        else:
            return mechTonnage/10 
    @staticmethod
    def get_table(mechTonnage):
        
        
        return is_table[mechTonnage]
