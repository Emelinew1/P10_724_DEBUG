import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    const { getByText } = render(<Home />);

    expect(getByText('Nos réalisations', { selector: 'h2.Title' })).toBeInTheDocument();
  });


it("a list of events is displayed with names,and positions", () => {
  render(<Home />);

  const people = [
    { name: "Samira", position: "CEO" },
    { name: "Jean-baptiste", position: "Directeur marketing" },
    { name: "Alice", position: "CXO" },
    { name: "Luís", position: "Animateur" },
    { name: "Christine", position: "VP animation" },
    { name: "Isabelle", position: "VP communication" }
  ];

  people.forEach(person => {
    const name = screen.getByText(person.name);
    expect(name).toBeInTheDocument();

    const position = screen.getByText(person.position);
    expect(position).toBeInTheDocument();
  });
});

it("a footer is displayed", async () => {
  const { container } = render(<Home />);
  const footer = container.getElementsByClassName("row")[0];

  expect(footer).toBeInTheDocument();
})

});
