const express = require('express');
const router = express.Router();

const users = [{
  id: 1,
  name: "Иванов Иван Иванович",
  email: "ivanov@neoflex.ru",
},
  {
	id: 2,
	name: "Петров Петр Петрович",
	email: "petrov@neoflex.ru",
  },
  {
	id: 3,
	name: "Сидоров Иван Александрович",
	email: "sidorov@neoflex.ru",
  },
];

router.get('/', (req, res) => {
  const userName = req.query.name
  
  const getUser = users.filter(({name}) => name.includes(userName));
  
  if (getUser.length > 0) {
	res.send(getUser);
  }
  
  res.send(users);
});

router.get('/:id', (req, res) => {
  const userId = Number(req.params.id)
  
  const getUser = users.filter(({id}) => id === userId);
  
  if (getUser.length === 0) {
	res.status(404);
  }
  
  res.send(getUser);
});

router.post('/', (req, res) => {
  if (!req.body) {
	return res.status(500)
  }
  const newUserId = users.length + 1;
  const newUser = [{id: newUserId, ...req.body}]
  return res.send([...users, ...newUser])
});

router.delete('/:id', (req, res) => {
  const userId = Number(req.params.id)
  
  const getUser = users.filter(({id}) => id !== userId);
  
  if (getUser.length === 0) {
	res.status(404);
  }
  
  res.send(getUser);
});

module.exports = router;
