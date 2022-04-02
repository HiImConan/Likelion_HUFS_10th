while True:
    lionInput = input()
    if 'lion' not in lionInput:
        break
    else:
        textLion = lionInput.replace(" ","")
        print(textLion.count('lion'))
