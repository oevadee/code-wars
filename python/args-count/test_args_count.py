import args_count


def test_args_count():
    assert args_count.args_count(1, "ew", 3213, "312", 49) == 5


def test_args_count():
    assert args_count.args_count(32, a1=12) == 2
