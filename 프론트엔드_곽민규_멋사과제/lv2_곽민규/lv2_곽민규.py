bowSize = int(input())

i = 1

while 0 < i <= bowSize:
    print('*' * i + ' ' * (2 * (bowSize - i)) + '*' * i)
    i += 1
    if i == bowSize:
        while i >= 0:
            print('*' * i + ' ' * (2 * (bowSize - i)) + '*' * i)
            i -= 1
            if i == 0:
                break
