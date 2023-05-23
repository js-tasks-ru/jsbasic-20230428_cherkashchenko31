function showSalary(users, age) {
  // ваш код...
    let result = '';
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      if (user.age <= age) {
        result += user.name + ', ' + user.balance + '\n';
      }
    }
    if (result.endsWith('\n')) {
      result = result.slice(0, -1);
    }
    return result;
  }
