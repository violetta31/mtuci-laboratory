import sys
sys.path.append('..')

from calculator import Record, CashCalculator


def test_get_today_cash_remained():

    cash_calculator = CashCalculator(1500)  # init calculator
    records = [Record(amount=180, comment="Кофе перед работой"),
               Record(amount=400, comment="Обед в столовой"),
               Record(amount=2000, comment="Посидеть с подружками в баре", date="22.04.2022")]  # create records

    for record in records:
        cash_calculator.add_record(record)  # insert records in calculator

    """test right away get today limit balance as it already contain get_today_stats"""
    assert cash_calculator.get_today_limit_balance() == 1500 - (records[0].amount + records[1].amount)


def test_get_week_stats():

    cash_calculator = CashCalculator(1500)  # init calculator

    records = [Record(amount=180, comment="Кофе перед работой"),
               Record(amount=400, comment="Обед в столовой", date="23.02.2022"),
               Record(amount=400, comment="Обед в столовой", date="30.03.2022"),
               Record(amount=400, comment="Обед в столовой", date="30.04.2022"),
               Record(amount=2000, comment="Посидеть с подружками в баре", date="04.05.2022")]

    for record in records:
        cash_calculator.add_record(record)  # insert records in calculator

    amounts = records[0].amount + records[1].amount + records[2].amount + records[3].amount  # sum valid records

    """test get week stats as the amount of week expenses"""
    assert cash_calculator.get_week_stats() == amounts