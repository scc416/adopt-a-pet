const getData = ({ rows }) => rows;
const getFirstRecord = (result) => getData(result)[0];

const queryGenerator = (db) => {
  const newVisitor = async () => {
    const queryString = `
      INSERT into visitors DEFAULT VALUES
      RETURNING *;
      `;

    try {
      const result = await db.query(queryString);
      return getFirstRecord(result);
    } catch (err) {
      console.log(err);
    }
  };

  const getLike = async (visitorId, petId) => {
    const values = [visitorId, petId];

    const queryString = `
      SELECT pet_id AS id
      from likes WHERE visitor_id = $1 AND pet_id = $2;
      `;

    try {
      const result = await db.query(queryString, values);
      return getData(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getLikes = async (visitorId) => {
    const values = [visitorId];

    const queryString = `
      SELECT pet_id AS id
      from likes WHERE visitor_id = $1;
      `;

    try {
      const result = await db.query(queryString, values);
      return getData(result);
    } catch (error) {
      console.log(error);
    }
  };

  const postLikes = async (id, petId) => {
    try {
      const visitorId = id || (await newVisitor()).id;
      const values = [visitorId, petId];
      const existQueryString = `
      SELECT id FROM likes
      WHERE visitor_id = $1 AND pet_id = $2;
      `;

      const postQueryString = `
      INSERT INTO likes (visitor_id, pet_id)
      VALUES ($1, $2)
      RETURNING *;
      `;

      const deleteQueryString = `
      DELETE from likes WHERE visitor_id = $1 AND pet_id = $2;
      `;

      const result = await db.query(existQueryString, values);
      getData(result).length
        ? await db.query(deleteQueryString, values)
        : await db.query(postQueryString, values);
      return visitorId;
    } catch (error) {
      console.log(error);
    }
  };

  return { getLike, getLikes, postLikes };
};

module.exports = queryGenerator;
