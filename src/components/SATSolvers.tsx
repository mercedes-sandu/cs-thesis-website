import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import SectionStarter from "./SectionStarter.tsx";
import { BoldText, StyledDivider } from "../StyledComponents";

function SATSolvers() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        mt: 10,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          mb: 3,
        }}
      >
        <SectionStarter />
        <Box
          sx={{
            width: "80%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="sectionHeader" sx={{ mb: 3 }}>
            SAT SOLVERS
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            What is a SAT Solver?
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            A <BoldText>SAT solver</BoldText> is a logic solver that finds a
            model that satisfies a given set of constraints. The constraints are
            typically translated into a Boolean formula (in conjunctive normal
            form) and the individual variables are flipped (true or false) until
            a satisfying assignment is found. With a stochastic local search SAT
            (SLS SAT) algorithm, a problem is initialized with a random truth
            assignment and the algorithm repeatedly "flips" the truth assignment
            of a chosen variable, meaning to say variables that are true are
            flipped to false, and vice versa, until a model is found that
            satisfies all the constraints. The choice of which variable is to be
            flipped changes based on the particular SAT algorithm which is being
            used.
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            The WalkSAT Algorithm
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            The <BoldText>WalkSAT</BoldText> algorithm utilizes a noise
            parameter (a value from 0 to 1) that dictates the degree of
            greediness employed when selecting a variable to flip. The
            greediness ranges from none, indicating selecting a variable at
            random (according to a uniform probability distribution), to entire,
            indicating selecting a variable that leads to a maximized decrease
            in the amount of currently unsatisfied constraints. While there are
            still unsatisfied constraints, here is the general outline of the
            WalkSAT algorithm:
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            <List sx={{ listStyle: "decimal", pl: 4 }}>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="listP" sx={{ textIndent: 0 }}>
                      Pick an unsatisfied constraint c, randomly.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="listP" sx={{ textIndent: 0 }}>
                      With probability p, pick a random variable from c, flip
                      it, and update everything accordingly.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  primary={
                    <Typography variant="listP" sx={{ textIndent: 0 }}>
                      Otherwise, pick the variable that minimizes the cost
                      associated with flipping it, flip it, and update
                      everything accordingly.
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            WalkSAT is often implemented with a maximum number of solution
            attempts and a maximum number of flips to ensure that the solver
            terminates in a reasonable amount of time, especially in the case
            when a model cannot be found.
          </Typography>
          <Typography variant="sectionSubheader" sx={{ mb: 3 }}>
            Strengths and Limitations
          </Typography>
          <Typography variant="sectionP" sx={{ mb: 3 }}>
            SAT solvers are particularly attractive for use in PCG systems for a
            number of reasons. They are very flexible, allowing for the encoding
            of a wide variety of constraints into boolean or pseudo-boolean
            (integer or float) representations. They also run very quickly, with
            many solvers able to find a solution in a fraction of a second. This
            makes them ideal for use in real-time systems such as video games,
            where a solution must be found quickly to avoid long loading times
            or allow for adaptability of a game in real time in response to the
            player's actions. Finally, SAT solvers are very modular and highly
            expressive to designers, as constraints can be added or removed from
            the system with relative ease.
          </Typography>
          <Typography variant="sectionP">
            SAT solvers do have some limitations that are worth noting. For one, problems that are not expressible in first-order logic cannot be solved by SAT solvers. As such, problems such as graph connectivity and transitive closure are difficult to encode. Certain SAT algorithms may also result in the solver getting stuck in a local minimum, meaning that the solver may not be able to find a solution even if one exists. Finally, SAT solvers may not necessarily find the optimal solution to a problem, but rather find any solution that satisfies the constraints.
          </Typography>
        </Box>
      </Box>
      <StyledDivider />
    </Box>
  );
}

export default SATSolvers;
