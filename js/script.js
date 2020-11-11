{
  const name = '«Генератор защитного поля»';
  let price = 1000;
  const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;
  console.log(firstMessage);
  price = 2000;
  const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;
  console.log(secondMessage);
}

{
  const stock = 100;
  const invoice = prompt();

  const message =
    invoice <= stock
      ? `"Заказ оформлен, с вами свяжется менеджер"`
      : `"На складе недостаточно товаров!"`;
  console.log(message);
}
