def reverse_words(text: str) -> str:
    newArr = text.split(" ")
    reversed_word = ""
    index = -1
    for word in newArr:
        index += 1
        if index == len(newArr) - 1:
            reversed_word += word[::-1]
        else:
            reversed_word += word[::-1] + " "
    return reversed_word


print(reverse_words("The quick brown fox jumps over the lazy dog."))
