import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
// controller
import quizzController from "../controllers/quizz.ts";

router
  .get("/quizz", quizzController.getAllQuizzs)
  .post("/quizz", quizzController.createQuizz)
  .get("/quizz/:id", quizzController.getQuizzById)
  .put("/quizz/:id", quizzController.updateQuizzById)
  .delete("/quizz/:id", quizzController.deleteQuizzById);

export default router;
