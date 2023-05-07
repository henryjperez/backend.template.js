import morgan from 'morgan';
import winston from 'winston';

export function loggerMiddleware() {
	const logger = winston.createLogger({
		level: 'info',
		format: winston.format.json(),
		// defaultMeta: { service: 'user-service' },
		transports: [
			new winston.transports.File({ filename: 'error.log', level: 'error' }),
			new winston.transports.File({ filename: 'logs.log' }),
			new winston.transports.Console({
				level: "debug",
				handleExceptions: true,
				format: winston.format.combine(
					winston.format.colorize(),
					winston.format.simple(),
				),
			}),
		],
		exitOnError: false,
	});
	logger.stream = {
		// @ts-ignore
		write: (message, encoding) => {
			logger.info(message);
		},
	};

	return morgan('combined', { stream: logger.stream });
}