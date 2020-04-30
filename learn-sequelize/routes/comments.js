var express = require('express');
var {User, Comment} = require('../models');

var router = express.Router();
router.get('/:id', function(req, res, next){
  Comment.findAll({
    include: {
      model: User,
      where: { id: req.params.id },
    },
  })
    .then((comments)=>{
      console.log(comments);
      res.json(comments);
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });
});
/**
 * findAll 메서드에 옵션이 추가되어 있다. include 옵션으로 관련 있는 모델을 불러올 수 있다
 * hasMany나 belongsTo로 연결해두어야 include 옵션을 사용할 수 있다
 * include 옵션에서 model 속성에는 User 모델을,  where 속성에는 :id로 받은 아이디 값을 넣어주었다
 * 조회된 댓글 객체에서는 include로 넣어준 사용자 정보도 들어 있으므로 작성자의 이름이나 나이 등을 조회할 수 있다
 */
router.post('/', function(req, res, next) {
  Comment.create({
    commenter: req.body.id,
    comment: req.body.comment,
  })
    .then((result) =>{
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });
});
/**
 * 댓글을 생성하는 라우터이다. commenter 속성에 사용자 아이디를 넣어 사용자와 댓글을 연결해준다
 */
router.patch('/:id', function(req, res, next){
  Comment.update({ comment: req.body.comment}, {where: {id: req.params.id}})
    .then((result)=>{
      res.json(result);
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });
});

router.delete('/:id', function(req, res, next){
  Comment.destroy({ where: {id: req.params.id }})
    .then((result)=>{
      res.json(result);
    })
    .catch((err)=>{
      console.error(err);
      next(err);
    });
});
/**
 * 수정에 삭제에는 각각 update와 destroy 메서드를 사용한다
 * update 메서드에는 먼저 첫 번째 인자로 수정할 컬럼과 값이 들어 있는 객체를 제공하고,
 * 두 번째 인자로는 어떤 로우를 수정할 것인지에 대해 조건을 제시한다. 
 * where 옵션으로 id가 :id에 해당하는 값인 댓글을 수정하도록 했다.
 * destroy 메서드에서도 update메서드와 유사하게 where 옵션으로 어떤 로우를 삭제할지 지정해준다
 */

module.exports = router;

//댓글에 관련된 CRUD 작업을 하는 라우터이다. GET /comments, POST /comments, PATCH /comments/:id, DELETE /comments/:id를 등록했다.