/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Kullanıcı girişi yapma.
 *     description: Kullanıcı girişi yapmak için kullanılır.
 *     tags:
 *       - Kullanıcı İşlemleri
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                type: string
 *                example: kullanici123
 *               password:
 *                type: string
 *                example: sifre123
 *     responses:
 *       200:
 *         description: Giriş başarılı, oturum bilgileri alındı.
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Yeni kullanıcı kaydı oluşturma.
 *     description: Yeni kullanıcı kaydı oluşturmak için kullanılır.
 *     tags:
 *       - Kullanıcı İşlemleri
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                type: string
 *                example: yeni_kullanici
 *               password:
 *                type: string
 *                example: sifre123
 *     responses:
 *       201:
 *         description: Yeni kullanıcı kaydı başarıyla oluşturuldu.
 */

/**
 * @swagger
 * /auth/refresh-token:
 *   post:
 *     summary: Yeniden oturum açma.
 *     description: Yeniden oturum açmak için kullanılır.
 *     tags:
 *       - Kullanıcı İşlemleri
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                type: string
 *                example: refresh_token_example
 *     responses:
 *       200:
 *         description: Oturum başarıyla yeniden açıldı, yeni oturum bilgileri alındı.
 */

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Oturumu sonlandırma.
 *     description: Oturumu sonlandırmak için kullanılır.
 *     tags:
 *       - Kullanıcı İşlemleri
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                type: string
 *                example: refresh_token_example
 *     responses:
 *       200:
 *         description: Oturum başarıyla sonlandırıldı.
 */