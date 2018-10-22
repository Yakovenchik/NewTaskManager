<!doctype html>
<html>
    <head>
        <title>DaysIDE</title>
        <meta charset="utf-8">
        <?php if (isset($_GET['dev'])): ?>
            <script tea="dayside/server/assets/index.tea"></script>
            <script src="dayside/server/assets/teacss/teacss.js"></script>
        <?php else: ?>
            <script src="dayside/server/assets/teacss/teacss.js"></script>
            <script src="dayside/server/assets/teacss/teacss-ui.js"></script>
            <link href="dayside/server/assets/teacss/teacss-ui.css" rel="stylesheet" type="text/css">
            <script src="dayside/client/dayside.js"></script>
            <link href="dayside/client/dayside.css" rel="stylesheet" type="text/css">
            <script src="dayside/plugins/pixlr/pixlr.js"></script>
            <script src="dayside/plugins/console/console.js"></script>
            <script src="dayside/plugins/git_commit/git_commit.js"></script>
            <link href="dayside/plugins/git_commit/git_commit.css" rel="stylesheet" type="text/css">
            <!--<script src="plugins/collaborate/collaborate.js"></script>-->

            <script>
                dayside({preview:false});
                dayside.plugins.pixlr();
                dayside.plugins.console();
                dayside.plugins.git_commit();
                // dayside.plugins.collaborate();
            </script>
        <?php endif ?>
    </head>
    <body>
        Welcome to DaysIDE
    </body>
</html>
