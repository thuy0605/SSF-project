# SSF-project

This project is about ChatBoxAI. The idea is that this chat app will combine with OpenAI and be used for anyone.

- User Interaction: Users interact with ChatBoxAI by typing queries or requirements into the chat interface provided by the frontend application.
- Backend Processing: Receiving user inputs, the frontend forwards the content to the backend infrastructure of ChatBoxAI. The backend reformats the content as necessary and prepares it for submission to the OpenAI API.
- OpenAI Response: The backend sends API requests to OpenAI, providing the reformatted user input as input data. OpenAI processes the input, generates a suitable response based on contextual understanding, and returns the response to the backend.
- Response Delivery: Receiving the response from OpenAI, the backend forwards it to the frontend application. The frontend displays the response to the user, completing the communication cycle.

## User stories:

- As a user, I want to be able to initiate a conversation with ChatBoxAI by typing my queries or requirements into the chat interface.
- As a user, I want ChatBoxAI to have a user-friendly interface that is easy to navigate and understand.
- As a user, I want ChatBoxAI to understand and interpret my queries accurately, regardless of the complexity or language used.
- As a user, I want ChatBoxAI to be able to handle multiple queries within the same conversation session.
- As a user, I want ChatBoxAI to be able to provide suggestions or options when I'm unsure about what to ask or need.
- As a user, I want ChatBoxAI to maintain privacy and security standards, ensuring that my conversations and data are protected.
- As a user, I want to search my requirements and the respones of these requirements.

## Install

Client

```bash
npm run dev
```

Server

```bash
npx tsx ./backend/index.ts
```
