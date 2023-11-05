/**
 * @swagger
 * /models/{id}:
 *   get:
 *     summary: Belirli bir modeli alın.
 *     description: Belirli bir modeli almak için kullanılır.
 *     tags:
 *       - Modeller
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Modelin benzersiz kimliği.
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Başarılı istek, belirtilen model alındı.
 */

// /**
//  * @swagger
//  * /models/{id}:
//  *   put:
//  *     summary: Belirli bir modeli güncelleyin.
//  *     description: Belirli bir modeli güncellemek için kullanılır.
//  *     tags:
//  *       - Modeller
//  *     parameters:
//  *       - name: id
//  *         in: path
//  *         description: Modelin benzersiz kimliği.
//  *         required: true
//  *         type: integer
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               name:
//  *                type: string
//  *                example: Güncellenmiş Model
//  *               description:
//  *                type: string
//  *                example: Model açıklaması (güncellendi)
//  *     responses:
//  *       200:
//  *         description: Belirtilen model başarıyla güncellendi.
//  */

/**
 * @swagger
 * /models/get-all-by-project-id/{projectId}:
 *   get:
 *     summary: Bir projenin tüm modellerini alın.
 *     description: Belirli bir projenin tüm modellerini almak için kullanılır.
 *     tags:
 *       - Modeller
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: projectId
 *         in: path
 *         description: Projenin benzersiz kimliği.
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Başarılı istek, belirtilen projenin tüm modelleri alındı.
 */

/**
 * @swagger
 * /models:
 *   post:
 *     summary: Yeni bir model oluşturun.
 *     description: Yeni bir model oluşturmak için kullanılır.
 *     tags:
 *       - Modeller
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                type: string
 *                example: Yeni Model
 *               project_id:
 *                type: integer
 *                example: 1
 *               properties:
 *                type: array
 *                items:
 *                 type: object
 *                 properties:
 *                  name:
 *                   type: string
 *                   example: Yeni Özellik
 *                  type:
 *                   type: string
 *                   enum: [string, integer, double, boolean, date]
 *     responses:
 *       201:
 *         description: Yeni model başarıyla oluşturuldu.
 */



/**
 * @swagger
 * /models/{id}:
 *   delete:
 *     summary: Belirli bir modeli silin.
 *     description: Belirli bir modeli silmek için kullanılır.
 *     tags:
 *       - Modeller
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Modelin benzersiz kimliği.
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Belirtilen model başarıyla silindi.
 */
