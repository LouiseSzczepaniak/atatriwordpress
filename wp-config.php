<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wordpress-atatri' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'XN[]@]5x0zQbN?<{9tsCf)x7f%[?6y5Lx}:5MFk&*&*MU):p_n>2b:<=VGxLUE%0' );
define( 'SECURE_AUTH_KEY',  'KC0BHcX--9kClk?`EGn.7(TXoB?F Z4._B%A7JM2ldml1b!j{ B`?MO.U@f;36$I' );
define( 'LOGGED_IN_KEY',    'cu]7+bsx*8B!?!-xH&U!?MC: iAm-CE_ ._Y9%-|h}XS]vx}m<I(LVSql};!U[;Z' );
define( 'NONCE_KEY',        '*7ah(#ssqRRd+ZHKgrG+bqYd;LxY;TK7ph6sq6x9I0?>/@e.,M%/A=].oPYU,zcF' );
define( 'AUTH_SALT',        '%wOk(~gr3z#g=[$);+PA&uTA$Qsn>KTN*o=3Wk9`PEIv3YAsIP/Cg qrzC:Gp#@Z' );
define( 'SECURE_AUTH_SALT', 'tJ94>)@L#}~}e/Ph:D:{wS-dw+J@<BzU0d*TZ(ue1,D7eDwC^T)%/:^1YnaEwx/<' );
define( 'LOGGED_IN_SALT',   '(#t+(pFRslg#P<K!8kr( 2VD+N{(:2Xsl(cfIBO-GzXG_te_jIy_WK=DEWwX_WUN' );
define( 'NONCE_SALT',       '<t!{@&Dlv@/,-qIn_ 1G9]F1Ft9ghK-0|vn Rs MX1KEB4~rgdi-;@kC%qsk{k,.' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
