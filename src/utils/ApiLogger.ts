import { APIResponse } from "@playwright/test";

type LogLevel = "NONE" | "ERROR" | "DEBUG";

export class ApiLogger {

    private static readonly level =
        (process.env.API_LOG_LEVEL ?? "ERROR") as LogLevel;

    static async logRequest(
        method: string,
        endpoint: string,
        headers?: Record<string, string>,
        body?: unknown
    ): Promise<void> {

        if (this.level !== "DEBUG") {
            return;
        }

        console.log("\n========== REQUEST ==========");

        console.log(`${method} ${endpoint}`);

        if (headers) {
            console.table(headers);
        }

        if (body !== undefined) {
            console.dir(body, { depth: null });
        }

    }

    static async logResponse(
        response: APIResponse
    ): Promise<void> {

        if (
            this.level === "NONE" ||
            (this.level === "ERROR" && response.ok())
        ) {
            return;
        }

        console.log("\n========== RESPONSE ==========");

        console.log(`Status: ${response.status()}`);

        console.table(response.headers());

        try {

            console.dir(
                await response.json(),
                { depth: null }
            );

        } catch {

            console.log(await response.text());

        }

    }

}