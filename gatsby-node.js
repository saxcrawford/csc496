const path = require('path');
const { config } = require('process');
const { inflate } = require('zlib');

// exports.modifyingWebpackConfig = ({ config, stage }) => {
//    config.devServer = {
//        hot: false,
//        inline: false,
//    }
//    return config;
//}



//Create a slug for each recipe and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => {
    //console.log(node);
    const { createNodeField } = actions
    const slug = (node.path && node.path.alias) ? node.path.alias : '/node/' + node.drupal_id;
    createNodeField({
        node,
        name: `slug`,
        value: slug,
    })
}

//Implement the gatsby API "creatPages".  This is called once the
//date layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const pageTemplate = path.resolve(`src/pages/recipe.js`)

        //page building queries
        //field_ragozin_sheet throws graphql errors
        resolve(
            graphql(
                `
                query MyQuery {
                    Drupal {
                        nodeRecipes(first:100) {
                            edges {
                                node {
                                    changed
                                    id
                                    cookingTime
                                    created
                                    path
                                    status
                                    title
                                    preparationTime
                                    numberOfServings
                                    ingredients
                                    recipeInstruction {
                                        processed
                                    }
                                    difficulty
                                    mediaImage{
                                        mediaImage {
                                            url
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                `
            ).then(result => {
                //shows during build/dev
                //console.log("RESULT");
                //console.log(result;)
                if (result.errors) {
                    reject(result.errors)
                }
                console.log("PAGES");
                console.log(result.data.Drupal.nodeRecipes);
                const pages = result.data.Drupal.nodeRecipes.edges;

                //result.data.allNodeHorse.edges.forEach(({ node }, index) => {
                pages.forEach(({ node }, index) => {
                    //console.log(node);
                    console.log("PATH: ");
                    console.log(node.path);
                    // const page_path = (node.paht && node.path.alias) ? node.path.alias : `/node/` + node.drupal_id;
                    const page_path = node.path
                    console.log(page_path);

                    createPage({
                        path: `${page_path}`,
                        component: pageTemplate,
                        context: {
                            nid: node.id,
                            data: node,
                        },
                    })
                })
            })
        )
    });
}