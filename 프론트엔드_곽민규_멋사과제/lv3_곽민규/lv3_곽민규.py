import random

answer = random.sample(range(0, 10), 3)
i = 0
strike = 0
ball = 0

while strike < 3:
    tryNum = list(map(int, input().split(",")))
    for i in range(0, 10):
        if tryNum.count(i) == 1:
            if answer.count(i) == 1:
                if tryNum.index(i) == answer.index(i):
                    strike += 1
                else:
                    ball += 1
            else:
                continue
        i += 1
    if strike != 3:
        print(f"{strike}S{ball}B입니다.")
        strike = 0
        ball = 0
    else:
        print(f"{strike}S입니다. 프로그램을 종료합니다.")
        break







