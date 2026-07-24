import mysql from 'mysql2/promise';

export const handler = async (event) => {
    try {
        const connection = await mysql.createConnection({
            host: 'portfolio-db.cn42kq2qs96o.eu-central-1.rds.amazonaws.com',
            user: 'admin',
            password: 'Av27032004!',
            database: 'mysql'
        });

        const [rows] = await connection.execute('SELECT NOW() as currentTime;');
        await connection.end();

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type"
            },
            body: JSON.stringify({ message: "RDS Erfolg!", time: rows[0].currentTime })
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: { "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ error: error.message })
        };
    }
};