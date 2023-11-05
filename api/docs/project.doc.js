/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Tüm projeleri alın.
 *     description: Tüm projeleri almak için kullanılır.
 *     tags:
 *       - Projeler
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Başarılı istek, tüm projeler alındı.
 */

/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     summary: Belirli bir projeyi alın.
 *     description: Belirli bir projeyi almak için kullanılır.
 *     tags:
 *       - Projeler
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Projeyi benzersiz kimliği.
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Başarılı istek, belirtilen proje alındı.
 */

/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Yeni bir proje oluşturun.
 *     description: Yeni bir proje oluşturmak için kullanılır.
 *     tags:
 *       - Projeler
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
 *                example: Yeni Proje
 *               description:
 *                type: string
 *                example: Proje açıklaması
 *               database_settings:
 *                type: object
 *                properties:
 *                 dbName:
 *                  type: string
 *                  example: mydatabase
 *                 dbUser:
 *                  type: string
 *                  example: ubuntu_user
 *                 dbPassword:
 *                  type: string
 *                  example: password
 *                 dbServer:
 *                  type: string
 *                  example: localhost
 *                 dbPort:
 *                  type: string
 *                  example: 5432
 *                 dbDialect:
 *                  type: string
 *                  example: postgres
 *     responses:
 *       201:
 *         description: Yeni proje başarıyla oluşturuldu.
 */

/**
 * @swagger
 * /projects/{id}:
 *   put:
 *     summary: Belirli bir projeyi güncelleyin.
 *     description: Belirli bir projeyi güncellemek için kullanılır.
 *     tags:
 *       - Projeler
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Projeyi benzersiz kimliği.
 *         required: true
 *         type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                type: string
 *                example: Güncellenmiş Proje
 *               description:
 *                type: string
 *                example: Proje açıklaması (güncellendi)
 *               database_settings:
 *                type: object
 *                properties:
 *                 dbName:
 *                  type: string
 *                  example: mydatabase
 *                 dbUser:
 *                  type: string
 *                  example: ubuntu_user
 *                 dbPassword:
 *                  type: string
 *                  example: password
 *                 dbServer:
 *                  type: string
 *                  example: localhost
 *                 dbPort:
 *                  type: string
 *                  example: 5432
 *                 dbDialect:
 *                  type: string
 *                  example: postgres
 *     responses:
 *       200:
 *         description: Belirtilen proje başarıyla güncellendi.
 */

/**
 * @swagger
 * /projects/{id}:
 *   delete:
 *     summary: Belirli bir projeyi silin.
 *     description: Belirli bir projeyi silmek için kullanılır.
 *     tags:
 *       - Projeler
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Projeyi benzersiz kimliği.
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Belirtilen proje başarıyla silindi.
 */

/**
 * @swagger
 * /projects/generate-project/{id}:
 *   get:
 *     summary: Belirli bir projeyi üretin ve indirin.
 *     description: Belirli bir projeyi üretmek ve ardından zip dosyasını indirmek için kullanılır.
 *     tags:
 *       - Projeler
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Projeyi benzersiz kimliği.
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Başarılı istek, belirtilen proje oluşturuldu ve indirme başlandı.
 */