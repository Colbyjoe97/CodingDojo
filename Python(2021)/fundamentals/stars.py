def draw_stars(list):
    for i in list:
        print("*" * i)

draw_stars([4,6,1,3,5,7,25])

def stars2(list):
    for i in list:
        if isinstance(i, int):
            print("*" * i)
        elif isinstance(i, str):
            print(i[0] * len(i))

stars2(["Hello",2,"test", "colby", 5])