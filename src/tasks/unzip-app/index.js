export const unzipApp = ({
    logger,
    downloadsDirectoryFullPath,
    exec
}) => ({
    msg
}) => new Promise((resolve, reject) => {

    const {
        release: {
            tag_name
        },
        repository: {
            name
        }
    } = msg

    const command = `unzip ${name}_${tag_name}.zip`

    const opts = {
        cwd: downloadsDirectoryFullPath
    }

    logger.info({
        function: 'unzipApp',
        params: {
            exec: {
                command,
                opts
            }
        }
    })

    exec(command, opts, (err, stdout, stderr) => {
        if (err) {
            return reject(err)
        }
        logger.info({
            function: 'unzipApp',
            msg: `Finished unzipping app`
        })
        return resolve()
    })

})