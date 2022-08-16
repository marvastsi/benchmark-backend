import { Request, Response } from 'express';
import HttpStatus from 'http-status';

class MessageController {
    save(request: Request, response: Response) {
        try {
            const message = request.body;
            console.log(message);
            return response.status(HttpStatus.ACCEPTED).json({ message: "Message created" });
        } catch (error) {
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
    }

    find(request: Request, response: Response) {
        try {
            const message = {
                id: 1,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    + ' Sed sed massa quam. Etiam a mauris et massa rutrum rutrum sed et mi.'
                    + ' Nulla in fermentum justo. Sed blandit felis scelerisque, bibendum augue sodales, varius augue.'
                    + ' Pellentesque odio nisi, euismod ac enim a, suscipit varius justo. Nulla facilisi.'
                    + ' Praesent luctus lacus id fringilla convallis. Donec sed mauris eget lorem varius egestas.'
                    + ' Vivamus vitae dolor non lectus imperdiet ullamcorper.'
                    + ' Sed lobortis sem vel dolor elementum, at pellentesque ipsum suscipit.'
                    + ' Aliquam nec libero tincidunt, semper justo vitae, elementum arcu.'
                    + ' In hac habitasse platea dictumst.',
                user: {
                    id: 100,
                    name: "Teste User"
                }
            }
            return response.status(HttpStatus.OK).json([message]);
        } catch (error) {
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
    }
}

export default MessageController;
