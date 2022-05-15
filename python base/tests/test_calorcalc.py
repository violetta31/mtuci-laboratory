import sys
sys.path.append('..')

from calculator import Record, CaloriesCalculator


def test_get_calories_remained():

    calories_calculator = CaloriesCalculator(1500)  # init calc
    records = [Record(amount=50, comment="булочка с корицей"),
               Record(amount=350, comment="пицца маргарита"),
               Record(amount=450, comment="паста карбонара"),
               Record(amount=650, comment="паста с креветками"),
               Record(amount=2000, comment="роллы", date="08.01.2022")]  # create records

    for record in records:
        calories_calculator.add_record(record)  # insert records

    amounts = records[0].amount + records[1].amount + records[2].amount + records[3].amount  # sum valid records

    """test right away get today limit balance as it already contain get_today_stats"""
    assert calories_calculator.get_today_limit_balance() == 1500 - amounts


def test_get_week_stats():

    cash_calculator = CaloriesCalculator(1500)  # init calculator

    records = [Record(amount=50, comment="булочка с маком"),
               Record(amount=350, comment="суп-пюре сырный", date="18.03.2022"),
               Record(amount=450, comment="индейка аля-французская", date="19.04.2022"),
               Record(amount=650, comment="паста болоньезе", date="20.03.2022"),
               Record(amount=2000, comment="роллы", date="10.05.2022")]

    for record in records:
        cash_calculator.add_record(record)  # insert records in calculator

    amounts = records[0].amount + records[1].amount + records[2].amount + records[3].amount  # sum valid records

    """test get week stats as the amount of week expenses"""
    assert cash_calculator.get_week_stats() == amounts
