module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    married: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    comment : {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }, {
    timestamps: false,
  })
}

// 시퀄라이즈는 알아서 id를 기본 키로 연결해  id 컬럼은 적어줄 필요가 없다. 
// sequelize, define 메서드로 테이블명과 각 컬럼의 스펙을 입력한다.
// MySQL 테이블과 컬럼 내용이 일치해야 정확하게 대응된다.

// 시퀄라이즈의 자료형은 MySQL 자료형과는 조금 다르다. 
// VARCHAR는 STRING으로, INT는 INTEGER로, TINYINT는 BOOLEAN으로, DATETIME은 DATE로 적는다
// INTEGER UNSIGNED는 UNSIGNED 옵션이 적용된 INT 를 의미한다
// 여기에 ZEROFILL 옵션도 사용하고 싶다면 INTEGER.UNSIGNED.ZEROFILL을 적어준다

// allowNull은 NOT NULL 옵션과 동일하다. unique는 UNIQUE 옵션이다
// defaultValue는 기본값(DEFAULT)을 의미한다
// DataTypes.NOW로 현재 시간을 기본값으로 사용할 수 있다
// SQL now()와 같다

// define 메서드의 세 번째 인자는 테이블 옵션이다
// timestamps 속성의 값이 false로 되어 있다
// timestamps 속성이 true면 시퀄라이즈는 createdAt과 updatedAt 컬럼을 추가한다
// 로우가 생성될 때와 수정될 때의 시간이 자동으로 입력된다

// 예제에서는 다루고 있지 않지만, 테이블의 옵션으로 paranoid, underscored, tableName 옵션도 자주 사용된다
// 실무에서는 timestamps: true와 함께 paranoid: true를 자주 사용한다
// paranoid 옵션은 timestamps가 true여야 사용할 수 있다
// paranoid를 true로 설정하면 deletedAt이라는 컬럼이 추가된다
// 로우를 삭제하는 시퀄라이즈 명령을 내렸을 때 로우를 제거하는 대신 deletedAt 제거된 날짜를 입력한다
// 로우는 조회하는 명령을 내렸을 때는 deletedAt의 값이 null인 로우(삭제되지 않았다는 뜻)를 조회한다

// 완전히 삭제하지 않고 deletedAt 컬럼을 따로 만들어 지운 날짜를 기록하는 이유는 데이터 복구를 염두에 두어서 그렇다
// 백업 데이터베이스가 없다면 로우를 지운 후 복구할 수가 없기 때문에 삭제되었다는 표시를 deletedAt 컬럼에 남겨두고, 조회할 때는 deletedAt 컬림이 null인 로우에서 찾는 것이다

// underscored 옵션은 createdAt, updatedAt, deletedAt 컬럼과 시퀄라이즈가 자동으로 생성해주는 관계 컬럼들의 이름을 스네이크케이크 형식으로 바꾸어준다
// 스네이크케이크란 변수 이름에 대문자 대신 _를 사용하는 방식으로 createdAt, updatedAt, deletedAt 컬럼은 각각 created_at, updated_at, deleted_at이 된다

// tableName 옵션은 테이블 이름을 다른 것으로 설정하고 싶을 때 사용한다
// 시퀄라이즈는 자동으로 define 메서드의 첫 번째 인자를 복수형으로 만들어 테이블 이름으로 사용한다
// 현재 user와 comment가 첫 번째 인자로 설정되어 있다
// 시퀄라이즈는 이를 사용해 users와 comments 테이블을 만든다
// 이러한 자동 변환을 막고 싶다면 tableName 옵션에 값을 주어 해당 값으로 테이블 이름을 만들 수 있다

