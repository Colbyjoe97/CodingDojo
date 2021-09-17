# PART 1
class MathDojo(object):
    def __init__(self):
        self.total = 0


    def add(self, *nums):
        for val in nums:
            self.total += val
        return(self)

    def subtract(self, *nums):
        for val in nums:
            self.total -= val
        return(self)

    def result(self):
        print(self.total)

md = MathDojo().add(2).add(2,5,50).subtract(3,2).result()


# PART 2
class MathDojo2(object):
	def __init__(self):
		self.result = 0

	def add(self, *args):
		for x in args:
			if type(x) is list:
				for i in x:
					self.result += i
			elif type(x) is int or type(x) is float: 
				self.result += x
		return self

	def subtract(self, *args):
		for x in args:
			if type(x) is list:
				for i in x:
					self.result -= i
			elif type(x) is int:
				self.result -= x
		return self
        

md2 = MathDojo2()
print(md2.add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result)

# PART III
class MathDojo3(object):
	def __init__(self):
		self.result = 0

	def add(self, *args): 
		for x in args:
			if type(x) is int:
				self.result += x
			elif type(x) is list:
				for i in x:
					self.result += i
			elif type(x) is tuple:
				for i in x:
					self.result += i
		return self

	def subtract(self, *args):
		for x in args:
			if type(x) is int or type(x) is float:
				self.result -= x
			elif type(x) is list:
				for i in x:
					self.result -= i
			elif type(x) is tuple:
				for i in x:
					self.result -= i
		return self 

md3 = MathDojo3()
tup = (1,3,4)
print(md3.add(tup, [1,2,3], 9, 8, 10).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result)