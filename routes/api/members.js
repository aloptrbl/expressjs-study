const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const members = require('../../Members');
//Routes

// Get Member (GET REQUEST) on server
//Gets All Members
// if doesnt declare router in index, just put '/api/members'
router.get('/', (req, res) => 
//return in JSON format
res.json(members));

//Get Single Member
router.get('/:id', (req, res) => {
  //res.send(req.params.id);
  const found = members.some(member => member.id === parseInt(req.params.id));

  if(found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)))
  }
  else {
    res.status(400).json({msg: `No Member with id of ${req.params.id}`});
  }
});

//Create Member (POST REQUEST) on server
//form submission,fetch API or Axios 
router.post('/', (req, res)=>{
   // res.send(req.body);
   const newMember = {
       //generate universal ID
       id: uuid.v4(),
       name: req.body.name,
       email: req.body.email,
       status: 'active'
   }

   if(!newMember.name || !newMember.email) {
      return res.status(400).json({msg: 'Please include name and email'});
   }
   members.push(newMember);
   res.json(members);
   //res.redirect('/')
})

//Update Members (PUT REQUEST) on server
router.put('/:id', (req, res) => {
    //res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
  
    if(found) {
    //email & name request in body
      const updMember = req.body;
      members.forEach(member => {
          if(member.id === parseInt(req.params.id)) {
              member.name = updMember.name ? updMember.name : member.name;
              member.email = updMember.email ? updMember.email : member.email;
          res.json({msg: 'Member updated', member})
            }
      });
    }
    else {
      res.status(400).json({msg: `No Member with id of ${req.params.id}`});
    }
  });

  //Delete Member (DELETE REQUEST) on server
  router.delete('/:id', (req, res) => {
    //res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
  
    if(found) {
      res.json({ msg: 'Member deleted', members: members.filter(member => member.id !== parseInt(req.params.id))});
    }
    else {
      res.status(400).json({msg: `No Member with id of ${req.params.id}`});
    }
  });

  //Rendering Template (Template Engine)
  // https://github.com/ericf/express-handlebars

module.exports = router;