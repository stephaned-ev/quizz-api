// import Quizz from "../interfaces/Quizz.ts";

import db from "../mongodb.ts";

const quizzCollection = db.collection("quizz");
// const user1 = await quizzCollection.findOne({ lastName: "Snow" });
// console.log("Le snow is :", user1);
export default {
  /**
   * @description Get all quizz
   * @route GET /quizz
   */
  getAllQuizzs: async ({ request, response, params }: {
    request: any;
    response: any;
    params: { id: string };
  }) => {
    console.log(" on va appeller la db ");
    const allQuizzs = await quizzCollection.find();
    console.log("allQuizzs", allQuizzs);
    response.headers.set("Content-Type", "application/json");
    response.status = 200;
    response.body = {
      success: true,
      quizzs: allQuizzs,
      // profiles: profiles,
    };
  },
  /**
   * @description Create a new profile
   * @route POST /profiles
   */
  createQuizz: async (
    { request, response }: { request: any; response: any },
  ) => {
    console.log("dans createQuizz POST");
    const body = await request.body();
    const values = await body.value;
    console.log("les valeurs", values);

    if (!request.body) {
      response.status = 400;
      response.body = {
        success: false,
        message: "No data provided",
      };
      return;
    }

    // TODO : a tester
    if (
      values.firstName &&
      values.lastName &&
      values.company &&
      values.picture_url
    ) {
      const newQuizz = await quizzCollection.insertOne({
        firstName: values.firstName,
        lastName: values.lastName,
        company: values.company,
        picture_url: values.picture_url,
      });

      response.body = {
        success: true,
        // data,
      };
    } else {
      console.log("on n'a pas tous les paramètres.");
      response.body = {
        success: false,
        message: "Need more informations",
      };
    }
  },
  getQuizzById: () => {},
  updateQuizzById: async () => {},
  deleteQuizzById: () => {},
};
