def high_and_low(numbers: str):
    numbersArr = numbers.split(' ')
    highest = numbersArr[0]
    lowest = numbersArr[0]
    for num in numbersArr:
        if (int(num) > int(highest)): highest = int(num)
        elif (int(num) < int(lowest)): lowest = int(num)
    return str(highest) + ' ' + str(lowest)