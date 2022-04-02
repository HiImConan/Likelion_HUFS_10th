import ast

ings = input('재료의 정보 데이터를 입력하세요 :')
ings = ast.literal_eval(ings)

menu = input('빵의 이름, 재료조합 데이터와 판매가를 입력하세요 :')
menu = ast.literal_eval(menu)

sell = input('하루 동안의 판매 실적을 입력하세요 :')
sell = ast.literal_eval(sell)

def solution(ings, menu, sold):
    i = 0
    final_net_profit = 0
    net_profit = []

    #재료 데이터 가공
    while i < len(ings):
        newIngArg = ings[i].split()
        newIngArg[1] = int(newIngArg[1])
        ings[i] = newIngArg
        i += 1
        if i == len(ings):
            i = 0
            break

    #이름, 조합, 판매가 데이터 가공
    while i < len(menu):
        newMenuArg = menu[i].split()
        newMenuArg[2] = int(newMenuArg[2])
        menu[i] = newMenuArg
        i += 1
        if i == len(menu):
            i = 0
            break

    #판매 실적 데이터 가공
    while i < len(sell):
        newSellArg = sell[i].split()
        newSellArg[1] = int(newSellArg[1])
        sell[i] = newSellArg
        i += 1
        if i == len(sell):
            i = 0
            break

    #순수익 계산기 
    for i in range(len(sell)):
        menu_name = sell[i][0]
        sell_count = sell[i][1]
        n = 0
        
        while n < len(menu):
            if menu[n].count(menu_name) == 1:
                break
            else:
                n += 1
        
        name_index = n
        menu_price = menu[name_index][2]
        ing_list = menu[name_index][1]
        
        production_cost = 0
        for ing in ings:
            ing_count = ing_list.count(ing[0])
            production_cost += (ing[1] * ing_count)

        net_profit.append(sell_count * (menu_price - production_cost))
        print(f"{menu_name} {sell_count}개를 판매해서 얻은 수익 : ({menu_price} - {production_cost}) x {sell_count} = {str(net_profit[i])}")
        final_net_profit += net_profit[i]


    return final_net_profit

result = solution(ings, menu, sell)
print(f"따라서, 하루 동안의 총수익은 {result}입니다.")


