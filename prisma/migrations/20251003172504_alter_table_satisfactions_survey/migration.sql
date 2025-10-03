/*
  Warnings:

  - You are about to drop the `SatisfactionSurvey` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SatisfactionSurvey" DROP CONSTRAINT "SatisfactionSurvey_order_id_fkey";

-- DropTable
DROP TABLE "SatisfactionSurvey";

-- CreateTable
CREATE TABLE "satisfactions_survey" (
    "id" TEXT NOT NULL,
    "note" INTEGER NOT NULL,
    "status" "StatusSatisfactionSurvey" NOT NULL,
    "order_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "satisfactions_survey_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "satisfactions_survey_order_id_key" ON "satisfactions_survey"("order_id");

-- AddForeignKey
ALTER TABLE "satisfactions_survey" ADD CONSTRAINT "satisfactions_survey_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
