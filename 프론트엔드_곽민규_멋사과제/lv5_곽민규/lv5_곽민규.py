import ast

log = input()
log = ast.literal_eval(log)

def solution(log):
    i = 0
    # 받아온 시간 str 사용 가능한 int로 쪼개기 작업
    for i in range(len(log)):
        log[i] = log[i].split(':')
        n = 0
        for n in range(len(log[i])):
            log[i][n] = int(log[i][n])
                               
    record_list = []
    # 짝수번째 시간과 홀수번째 시간 간 차이 구하기
    for i in range(int(len(log)/2)):
        hour = (log[2 * i + 1][0] - log[2 * i][0]) * 60
        minute = log[2 * i + 1][1] - log[2 * i][1]                                     
        study_record = hour + minute
        # 예외조건 처리
        if study_record < 5:
            record_list.append(0)
        elif study_record >= 105:
            record_list.append(105)
        else:
            record_list.append(study_record)
            
    # 하루 공부량 총합
    record_sum = 0
    for i in range(len(record_list)):
        record_sum += record_list[i]

    result_hour = record_sum // 60
    if result_hour < 10:
        result_hour = f"0{result_hour}"
    else:
        result_hour = str(result_hour)

    result_minute = record_sum % 60
    if result_minute < 10:
        result_minute = f"0{result_minute}"
    else:
        result_minute = str(result_minute)

    result = f"{result_hour}:{result_minute}"
    return result

print(solution(log))
    
    
