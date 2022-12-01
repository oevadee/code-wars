def to_jaden_case(string: str) -> str:
    arr = string.split()
    newStr = ""
    pos = -1
    for letter in arr:
        pos += 1
        if pos == len(arr) - 1:
            newStr += letter.capitalize()
        else:
            newStr += letter.capitalize() + " "
    return newStr
