some_string = input()


def palindrome(string):
    string = string.lower().replace(' ', '')
    reversed_string = ''.join(reversed(string))
    return string == reversed_string


print(palindrome(some_string))