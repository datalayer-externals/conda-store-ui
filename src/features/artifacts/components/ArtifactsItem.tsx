import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useTheme } from "@mui/material/styles";

import { Artifact } from "../../../common/models";
import { PrefContext } from "../../../preferences";
import { isPathAbsolute } from "../../../utils/helpers";

interface IArtifactsProps {
  /**
   * @param artifact type with the name and route properties
   */
  artifact: Artifact;
}

export const ArtifactItem = ({ artifact }: IArtifactsProps) => {
  const pref = React.useContext(PrefContext);
  const url = isPathAbsolute(pref.apiUrl)
    ? pref.apiUrl
    : `${window.location.origin}${pref.apiUrl}`;
  const route = new URL(artifact.route, url).toString();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        "&:hover": {
          borderBottom: "1px solid"
        },
        "&:focus": {
          borderBottom: `1px solid ${theme.palette.primary.main}`,
          backgroundColor: theme.palette.primary[50],
          color: theme.palette.primary[600]
        }
      }}
    >
      <OpenInNewIcon />
      <Link
        href={route}
        color="secondary"
        underline="none"
        sx={{
          fontSize: "14px",
          marginLeft: "5px",
          "&:focus": {
            color: theme.palette.primary[600]
          }
        }}
        target="_blank"
      >
        {artifact.name}
      </Link>
    </Box>
  );
};
