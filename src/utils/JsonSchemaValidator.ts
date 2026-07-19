import Ajv from "ajv";
import addFormats from "ajv-formats";

export class JsonSchemaValidator {

    private static readonly ajv = (() => {

        const ajv = new Ajv();

        addFormats(ajv);

        return ajv;

    })();

    static validate(
        schema: object,
        data: unknown
    ): void {

        const validate = this.ajv.compile(schema);

        const isValid = validate(data);

        if (!isValid) {

            throw new Error(
                JSON.stringify(validate.errors, null, 2)
            );

        }

    }

}